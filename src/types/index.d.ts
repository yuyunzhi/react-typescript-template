declare let window: Window
declare let document: Document
declare interface Window {
  mozRequestAnimationFrame: (callback: FrameRequestCallback) => number
  mozCancelAnimationFrame: (handle: number) => void
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png' {
  const value: string
  export default value
}
