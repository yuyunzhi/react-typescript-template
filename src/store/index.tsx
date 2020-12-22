import React from 'react'
import { Provider as CountProvider } from './count'

const providers = [CountProvider]

export default (props: any) =>
  providers.reduceRight(
    (children, Parent) => <Parent>{children}</Parent>,
    props.children
  )
