import * as React from "react"
import { render, screen } from "@testing-library/react"
import { StaticQuery } from "gatsby" // mocked
import '@testing-library/jest-dom'
import Index from "../index"


beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
        },
      },
    })
  ).mockImplementationOnce(({ render }) =>
    render({
      placeholderImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
    })
  )
})

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});

// describe(`Index`, () => {
//   it(`contains this text`, () => {
//     const { getByText } = render(<Index />)

//     const greeting = getByText(`This Portfolio is based around`)

//     expect(greeting).toBeInTheDocument()
//   })
// })

