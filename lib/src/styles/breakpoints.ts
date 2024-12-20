export const breakpoints = {
  smallMobile: 530,
  mobile: 768,
  tablet: 900,
  desktop: 1216,
  widescreen: 1408,
  fullhd: 1408,
}

export const query = {
  forSmallMobileAndDown: `(max-width: ${breakpoints.smallMobile}px)`,
  forMobileAndDown: `(max-width: ${breakpoints.mobile}px)`,
  forTabletAndDown: `(max-width: ${breakpoints.tablet}px)`,
  forDesktopAndDown: `(max-width: ${breakpoints.desktop}px)`,
  forWidescreenAndDown: `(max-width: ${breakpoints.widescreen}px)`,
  forFullHdAndDown: `(max-width: ${breakpoints.fullhd}px)`,
  forUpMobile: `(min-width: ${breakpoints.mobile}px)`,
  forTabletAndUp: `(min-width: ${breakpoints.tablet}px)`,
  forDesktopAndUp: `(min-width: ${breakpoints.desktop}px)`,
}
