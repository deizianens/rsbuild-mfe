import { renderHook } from '@testing-library/react-hooks'
import { useOnClickOutside } from './useOnClickOutside'

describe('useOnClickOutside', () => {
  let originalDocument: Document
  const events: any = {}
  const addEventListenerMock = jest.fn()

  beforeAll(() => {
    originalDocument = document
    document.addEventListener = addEventListenerMock
    document.removeEventListener = jest.fn()

    addEventListenerMock.mockImplementation((event, callback) => {
      events[event] = callback
    })
  })

  afterAll(() => {
    Object.defineProperty(document, 'value', originalDocument)
  })

  it('should throw an error if handler is not a function', () => {
    const { result } = renderHook(() =>
      useOnClickOutside([], null as any)
    )
    expect(result.error).toEqual(
      Error('[useOnClickOutside]: handler should be a function')
    )
  })

  it('should attach event listeners to document object', () => {
    const ref1 = { current: originalDocument.createElement('div') }
    const ref2 = { current: originalDocument.createElement('div') }

    renderHook(() => useOnClickOutside([ref1, ref2], jest.fn()))

    expect(document.addEventListener).toHaveBeenCalledTimes(2)
    expect(document.addEventListener).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function)
    )
    expect(document.addEventListener).toHaveBeenCalledWith(
      'touchstart',
      expect.any(Function)
    )
  })

  it('should remove event listeners when unmounting', () => {
    const ref = { current: document.createElement('div') }

    const { unmount } = renderHook(() =>
      useOnClickOutside([ref], jest.fn())
    )

    unmount()

    expect(document.removeEventListener).toHaveBeenCalledTimes(2)
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function)
    )
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'touchstart',
      expect.any(Function)
    )
  })

  it('should call handler when clicking outside of reference', () => {
    const ref = { current: document.createElement('div') }
    const handleClick = jest.fn()

    renderHook(() => useOnClickOutside([ref], handleClick))

    events.mousedown({
      target: document.createElement('button'),
      button: 0,
    })

    expect(handleClick).toHaveBeenCalled()
  })

  it('should not call handler when clicking inside of reference', () => {
    const ref = { current: document.createElement('div') }
    const handleClick = jest.fn()

    renderHook(() => useOnClickOutside([ref], handleClick))

    const childNode = document.createElement('span')
    ref.current.appendChild(childNode)

    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      buttons: 0,
    })
    childNode.dispatchEvent(event)

    expect(handleClick).not.toHaveBeenCalled()
  })
})
