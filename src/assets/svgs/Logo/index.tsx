import React from 'react'

import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 768px) {
    .logo-desktop {
      display: none;
    }
  }
  @media (min-width: 769px) {
    .logo-mobile {
      display: none;
    }
  }
`

function Logo() {
  return (
    <Container>
      <svg
        className="logo-mobile"
        data-testid="logo-mobile"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.4783 25.3684C26.2792 25.3684 27.7391 23.8957 27.7391 22.0789C27.7391 20.2622 26.2792 18.7895 24.4783 18.7895C22.6773 18.7895 21.2174 20.2622 21.2174 22.0789C21.2174 23.8957 22.6773 25.3684 24.4783 25.3684ZM24.4783 25.3684C21.5968 25.3684 19.2609 27.7248 19.2609 30.6316H29.6957C29.6957 27.7248 27.3597 25.3684 24.4783 25.3684ZM12.7391 8.92105C12.7391 12.1912 10.1112 14.8421 6.86957 14.8421C3.62789 14.8421 1 12.1912 1 8.92105C1 5.65095 3.62789 3 6.86957 3C10.1112 3 12.7391 5.65095 12.7391 8.92105ZM1 18.7895H12.7391V30.6316H1V18.7895ZM24.4783 3L31 14.8421H17.9565L24.4783 3Z"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
      <svg
        className="logo-desktop"
        data-testid="logo-desktop"
        width="43"
        height="41"
        viewBox="0 0 43 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.3043 32.8246C34.7056 32.8246 36.6522 30.8609 36.6522 28.4386C36.6522 26.0163 34.7056 24.0526 32.3043 24.0526C29.9031 24.0526 27.9565 26.0163 27.9565 28.4386C27.9565 30.8609 29.9031 32.8246 32.3043 32.8246ZM32.3043 32.8246C28.4624 32.8246 25.3478 35.9664 25.3478 39.8421H39.2609C39.2609 35.9664 36.1463 32.8246 32.3043 32.8246ZM16.6522 10.8947C16.6522 15.2549 13.1483 18.7895 8.82609 18.7895C4.50386 18.7895 1 15.2549 1 10.8947C1 6.53459 4.50386 3 8.82609 3C13.1483 3 16.6522 6.53459 16.6522 10.8947ZM1 24.0526H16.6522V39.8421H1V24.0526ZM32.3043 3L41 18.7895H23.6087L32.3043 3Z"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </Container>
  )
}

export default Logo
