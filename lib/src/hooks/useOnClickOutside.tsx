import React, { useEffect, useCallback } from 'react'

const events = ['mousedown', 'touchstart']

export const useOnClickOutside = (
  refs: React.RefObject<HTMLDivElement>[] = [],
  handler: () => any,
  inputs: any[] = []
) => {
  if (!handler || typeof handler !== 'function') {
    throw new Error(
      '[useOnClickOutside]: handler should be a function'
    )
  }

  const refHandle = useCallback(handler, inputs)

  useEffect(() => {
    const listener = (event: Event) => {
      if (!Array.isArray(refs)) {
        refs = [refs]
      }

      if (
        refs.find(
          (ref: any) =>
            !ref.current || ref.current.contains(event.target)
        )
      ) {
        return
      }

      refHandle()
    }

    events.forEach((event) => {
      document.addEventListener(event, listener)
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener)
      })
    }
  }, [refHandle])
}
