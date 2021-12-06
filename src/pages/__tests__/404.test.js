import * as React from "react"
import { render } from "@testing-library/react"
import { StaticQuery } from "gatsby" // mocked
import '@testing-library/jest-dom'

import FourOhFour from "../404"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
        },
      },
    })
  )
})

describe(`404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<FourOhFour />)

    const el = getByText(`Page not found`)

    expect(el).toBeInTheDocument()
  })
})