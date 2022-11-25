import styled from "styled-components";

const Svg = ({ variant, onClick }) => {
  return <IconSvg variant={variant} onClick={onClick}></IconSvg>;
};

const IconSvg = ({ variant, onClick }) => {
  switch (variant) {
    case "mainIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="40"
          viewBox="0 0 152 44"
          fill="none"
          cursor="pointer"
          onClick={onClick}
        >
          <path
            d="M15.3996 43.9489L0 0H67.9849L52.5807 43.9489L51.1052 43.3577C43.0879 40.1299 37.6562 36.4292 33.9925 32.7854C30.3287 36.4292 24.8971 40.1299 16.8797 43.3577L15.3996 43.9489ZM35.966 30.6307C39.1363 33.8365 43.8371 37.1431 50.7854 40.1168L63.8461 2.85547H4.14342L17.1995 40.1124C24.1433 37.1431 28.8486 33.8321 32.019 30.6263C25.2854 22.5328 26.6284 15.254 26.7244 14.7898L26.9619 13.638H41.0276L41.2652 14.7898C41.3565 15.2584 42.6996 22.5372 35.966 30.6307ZM29.5338 16.4978C29.4562 18.5869 29.8582 23.2204 33.9925 28.4102C38.1222 23.2248 38.5288 18.5912 38.4511 16.4978H29.5338Z"
            fill="#A5A29E"
          />
          <path
            d="M62.0815 44C58.6914 44 57 42.4334 57 39.3071V39.0735C57 37.658 57.43 36.5243 58.2829 35.686C59.1358 34.8478 60.2897 34.4355 61.7303 34.4355C63.2999 34.4355 64.4394 34.834 65.1347 35.6311C65.8299 36.435 66.181 37.6237 66.181 39.1971V39.9873H60.2395C60.3255 40.695 60.5835 41.1829 61.0064 41.4508C61.4293 41.7188 62.0671 41.8562 62.9129 41.8562C63.8589 41.8562 64.8193 41.6707 65.794 41.2997V43.1824C64.805 43.7252 63.5794 44 62.0815 44ZM61.7231 36.435C60.8272 36.435 60.3255 37.0465 60.2109 38.2627H63.1279C63.1279 37.6031 63.0132 37.1358 62.791 36.861C62.5688 36.5724 62.2105 36.435 61.7231 36.435Z"
            fill="#A5A29E"
          />
          <path
            d="M73.7279 44C72.8177 44 72.0938 43.7801 71.5491 43.3335C71.0044 42.8938 70.7393 42.241 70.7393 41.3821C70.7393 40.4614 71.0331 39.7881 71.628 39.3621C72.2228 38.9361 73.0829 38.6543 74.2225 38.51L75.9784 38.2627V37.8848C75.9784 37.4107 75.8494 37.0946 75.5842 36.9366C75.319 36.7854 74.8245 36.703 74.1078 36.703C73.2334 36.703 72.3877 36.7923 71.5635 36.9709V34.9646C72.5095 34.6073 73.7638 34.4286 75.319 34.4286C76.5661 34.4286 77.5193 34.6485 78.1715 35.0883C78.8237 35.528 79.1534 36.2495 79.1534 37.2595V43.8351H76.5231L76.2938 43.1205H76.2006C75.7562 43.7045 74.932 44 73.7279 44ZM74.8102 42.083C75.3477 42.083 75.7347 41.9593 75.9712 41.7051V39.9117L74.846 40.0217C74.4733 40.056 74.201 40.1522 74.0361 40.3171C73.8713 40.482 73.7853 40.7294 73.7853 41.0592C73.7853 41.7394 74.1293 42.083 74.8102 42.083Z"
            fill="#A5A29E"
          />
          <path
            d="M80.3431 43.8214V34.5867H83.4107V35.6998H83.5038C83.769 35.3425 84.113 35.0539 84.5359 34.834C84.9587 34.6142 85.4103 34.5042 85.8976 34.5042C86.1198 34.5042 86.3062 34.5249 86.4567 34.573V37.2664C86.0481 37.1908 85.7686 37.1565 85.6325 37.1565C84.8369 37.1565 84.1417 37.3008 83.5397 37.5825V43.8214H80.3431Z"
            fill="#A5A29E"
          />
          <path
            d="M91.8965 44C88.5065 44 86.8151 42.4334 86.8151 39.3071V39.0735C86.8151 37.658 87.2451 36.5243 88.098 35.686C88.9509 34.8478 90.1048 34.4355 91.5453 34.4355C93.1149 34.4355 94.2545 34.834 94.9497 35.6311C95.6449 36.435 95.9961 37.6237 95.9961 39.1971V39.9873H90.0546C90.1406 40.695 90.3986 41.1829 90.8215 41.4508C91.2443 41.7188 91.8822 41.8562 92.7279 41.8562C93.674 41.8562 94.6344 41.6707 95.6091 41.2997V43.1824C94.62 43.7252 93.3945 44 91.8965 44ZM91.5382 36.435C90.6423 36.435 90.1406 37.0465 90.0259 38.2627H92.9429C92.9429 37.6031 92.8283 37.1358 92.6061 36.861C92.3839 36.5724 92.0255 36.435 91.5382 36.435Z"
            fill="#A5A29E"
          />
          <path
            d="M101.185 43.8351V31.7902H109.821V34.2088H104.704V36.9366H108.703V39.3002H104.704V43.8351H101.185Z"
            fill="#A5A29E"
          />
          <path
            d="M110.739 43.8214V34.5867H113.806V35.6998H113.899C114.165 35.3425 114.509 35.0539 114.932 34.834C115.354 34.6142 115.806 34.5042 116.293 34.5042C116.515 34.5042 116.702 34.5249 116.852 34.573V37.2664C116.444 37.1908 116.164 37.1565 116.028 37.1565C115.233 37.1565 114.537 37.3008 113.935 37.5825V43.8214H110.739Z"
            fill="#A5A29E"
          />
          <path
            d="M126.893 44C123.503 44 121.812 42.4334 121.812 39.3071V39.0735C121.812 37.658 122.242 36.5243 123.095 35.686C123.948 34.8478 125.102 34.4355 126.542 34.4355C128.112 34.4355 129.251 34.834 129.947 35.6311C130.642 36.435 130.993 37.6237 130.993 39.1971V39.9873H125.052C125.138 40.695 125.396 41.1829 125.818 41.4508C126.241 41.7188 126.879 41.8562 127.725 41.8562C128.671 41.8562 129.631 41.6707 130.606 41.2997V43.1824C129.624 43.7252 128.391 44 126.893 44ZM126.542 36.435C125.646 36.435 125.145 37.0465 125.03 38.2627H127.947C127.947 37.6031 127.832 37.1358 127.61 36.861C127.388 36.5724 127.03 36.435 126.542 36.435Z"
            fill="#A5A29E"
          />
          <path
            d="M117.712 33.5766V31.2473H120.945V33.5766H117.712ZM117.734 43.8626V34.6142H120.93V43.8626H117.734Z"
            fill="#A5A29E"
          />
          <path
            d="M131.753 43.8214V34.5867H134.82V35.3975H134.913C135.774 34.7516 136.798 34.4286 137.981 34.4286C139.873 34.4286 140.826 35.2669 140.826 36.9503V43.8145H137.644V37.7955C137.644 37.4244 137.551 37.1633 137.372 37.0122C137.193 36.861 136.877 36.7923 136.426 36.7923C135.967 36.7923 135.473 36.8954 134.949 37.1015V43.8214H131.753Z"
            fill="#A5A29E"
          />
          <path
            d="M145.449 44C144.352 44 143.442 43.6221 142.718 42.8731C141.994 42.1173 141.629 40.9767 141.629 39.4445V39.2452C141.629 37.5893 142.023 36.3663 142.804 35.5899C143.593 34.8134 144.661 34.4286 146.001 34.4286C146.89 34.4286 147.556 34.5592 148.015 34.8203V31H151.175V43.8145H148.445L148.237 43.1136H148.129C147.492 43.7045 146.596 44 145.449 44ZM146.66 41.7738C147.183 41.7738 147.635 41.6364 148.022 41.3615V36.8266C147.678 36.6136 147.234 36.5106 146.696 36.5106C146.101 36.5106 145.65 36.6961 145.349 37.074C145.055 37.4519 144.904 38.1115 144.904 39.0529V39.3208C144.904 40.2553 145.048 40.8943 145.341 41.2447C145.635 41.602 146.08 41.7738 146.66 41.7738Z"
            fill="#A5A29E"
          />
        </svg>
      );
    case "notification":
      return (
        <SvgWrap>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="37"
            viewBox="0 0 19 37"
            fill="none"
          >
            <path
              d="M18.65 23.355C18.65 23.855 18.49 24.315 18.24 24.695C17.81 25.325 17.1 25.745 16.28 25.745H2.38998C2.13998 25.745 1.89999 25.705 1.67999 25.635C1.14999 25.475 0.709973 25.145 0.409973 24.695C0.159973 24.315 0 23.855 0 23.355C0 22.285 0.709983 21.385 1.66998 21.075C1.81998 21.035 1.96997 21.005 2.12997 20.985V16.415C2.12997 12.715 4.94998 9.67504 8.53998 9.27504V8.94504C8.53998 8.51504 8.88998 8.16504 9.31998 8.16504C9.74998 8.16504 10.1 8.51504 10.1 8.94504V9.27504C11.72 9.45504 13.23 10.165 14.4 11.345C15.76 12.685 16.51 14.495 16.51 16.415V20.985C17.71 21.115 18.65 22.125 18.65 23.355Z"
              fill="black"
            />
            <path
              d="M6.56006 26.7451H12.0901C11.5401 27.7051 10.5101 28.3351 9.33008 28.3351C8.13008 28.3351 7.11006 27.7051 6.56006 26.7451Z"
              fill="black"
            />
          </svg>
        </SvgWrap>
      );
    case "invite":
      return (
        <SvgWrap>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="29"
            viewBox="0 0 33 29"
            fill="none"
          >
            <path
              d="M12.4746 13.7423C15.0517 13.7423 17.1456 11.6484 17.1456 9.07131C17.1456 6.49423 15.0517 4.40036 12.4746 4.40036C9.89757 4.40036 7.80371 6.49423 7.80371 9.07131C7.80371 11.6484 9.89757 13.7423 12.4746 13.7423Z"
              fill="black"
            />
            <path
              d="M21.5439 21.0398V23.1709C21.5439 23.6788 21.1351 24.1001 20.6147 24.1001H4.92923C4.42125 24.1001 4 23.6788 4 23.1709V21.0398C4 18.0539 6.42839 15.6255 9.41433 15.6255H16.1296C16.7367 15.6255 17.319 15.7246 17.8642 15.9228C17.8642 15.9228 17.8642 15.9105 17.8766 15.9228C20.0076 16.6414 21.5439 18.661 21.5439 21.0398Z"
              fill="black"
            />
            <path
              d="M21.5439 21.0398V23.1709C21.5439 23.6788 21.1351 24.1001 20.6147 24.1001H4.92923C4.42125 24.1001 4 23.6788 4 23.1709V21.0398C4 18.0539 6.42839 15.6255 9.41433 15.6255H16.1296C16.7367 15.6255 17.319 15.7246 17.8642 15.9228C17.8642 15.9228 17.8642 15.9105 17.8766 15.9228C20.0076 16.6414 21.5439 18.661 21.5439 21.0398Z"
              fill="black"
            />
            <path
              d="M28.7795 19.9743V21.7213C28.7795 22.1301 28.445 22.4646 28.0361 22.4646H23.4024V21.0398C23.4024 19.7885 23.0802 18.599 22.5227 17.5707C22.2873 17.1494 22.0271 16.753 21.7297 16.3937C21.5191 16.1583 21.3085 15.9228 21.0854 15.7246H24.5298C24.6661 15.7246 24.79 15.7246 24.9139 15.7494C25.075 15.7618 25.236 15.7866 25.3971 15.8237C26.3387 16.022 27.1564 16.5423 27.7635 17.2362C27.8627 17.3477 27.9618 17.4716 28.0485 17.6079C28.0609 17.6079 28.0609 17.6079 28.0485 17.6202C28.2839 17.9672 28.4698 18.3388 28.5937 18.7477C28.6308 18.884 28.668 19.0203 28.6928 19.1566C28.7547 19.4168 28.7795 19.6893 28.7795 19.9743Z"
              fill="black"
            />
            <path
              d="M21.8166 13.5688C23.8626 13.5688 25.5211 11.9102 25.5211 9.86424C25.5211 7.81828 23.8626 6.1597 21.8166 6.1597C19.7706 6.1597 18.1121 7.81828 18.1121 9.86424C18.1121 11.9102 19.7706 13.5688 21.8166 13.5688Z"
              fill="black"
            />
          </svg>
        </SvgWrap>
      );
    case "close":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          onClick={onClick}
          cursor="pointer"
        >
          <path d="M18 2L2 18" stroke="#B5B3AF" strokeWidth="3" />
          <path d="M2 2L18 18" stroke="#B5B3AF" strokeWidth="3" />
        </svg>
      );
    case "logo":
      return (
        <svg
          width="157"
          height="131"
          viewBox="0 0 157 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_178_1044)">
            <path
              d="M38.24 100.35L4.53003 0H153.35L119.63 100.35L116.4 99C98.85 91.63 86.96 83.18 78.94 74.86C70.92 83.18 59.03 91.63 41.48 99L38.24 100.35ZM83.26 69.94C90.2 77.26 100.49 84.81 115.7 91.6L144.29 6.52H13.6L42.18 91.59C57.38 84.81 67.68 77.25 74.62 69.93C59.88 51.45 62.82 34.83 63.03 33.77L63.55 31.14H94.34L94.86 33.77C95.06 34.84 98 51.46 83.26 69.94ZM69.18 37.67C69.01 42.44 69.89 53.02 78.94 64.87C87.98 53.03 88.87 42.45 88.7 37.67H69.18Z"
              fill="#A4A09C"
            />
            <path
              d="M4.96004 129.91L0.790039 112.38H5.72004L8.02004 123.42H8.12004L10.91 112.38H14.88L17.64 123.42H17.72L20.17 112.38H24.45L20.25 129.91H15.32L12.72 119.11H12.64L9.93004 129.91H4.96004Z"
              fill="#A4A09C"
            />
            <path
              d="M31.88 130.15C27.15 130.15 24.79 127.87 24.79 123.32V122.98C24.79 120.92 25.39 119.27 26.58 118.05C27.77 116.83 29.38 116.23 31.39 116.23C33.58 116.23 35.17 116.81 36.14 117.97C37.11 119.14 37.6 120.87 37.6 123.16V124.31H29.31C29.43 125.34 29.79 126.05 30.38 126.44C30.97 126.83 31.86 127.03 33.04 127.03C34.36 127.03 35.7 126.76 37.06 126.22V128.96C35.68 129.75 33.97 130.15 31.88 130.15ZM31.38 119.14C30.13 119.14 29.43 120.03 29.27 121.8H33.34C33.34 120.84 33.18 120.16 32.87 119.76C32.56 119.34 32.06 119.14 31.38 119.14Z"
              fill="#A4A09C"
            />
            <path
              d="M48.13 130.15C46.86 130.15 45.85 129.83 45.09 129.18C44.33 128.54 43.96 127.59 43.96 126.34C43.96 125 44.37 124.02 45.2 123.4C46.03 122.78 47.23 122.37 48.82 122.16L51.27 121.8V121.25C51.27 120.56 51.09 120.1 50.72 119.87C50.35 119.65 49.66 119.53 48.66 119.53C47.44 119.53 46.26 119.66 45.11 119.92V117C46.43 116.48 48.18 116.22 50.35 116.22C52.09 116.22 53.42 116.54 54.33 117.18C55.24 117.82 55.7 118.87 55.7 120.34V129.91H52.03L51.71 128.87H51.58C50.96 129.72 49.81 130.15 48.13 130.15ZM49.64 127.36C50.39 127.36 50.93 127.18 51.26 126.81V124.2L49.69 124.36C49.17 124.41 48.79 124.55 48.56 124.79C48.33 125.03 48.21 125.39 48.21 125.87C48.21 126.86 48.69 127.36 49.64 127.36Z"
              fill="#A4A09C"
            />
            <path
              d="M57.3601 129.89V116.45H61.6401V118.07H61.7701C62.1401 117.55 62.6201 117.13 63.2101 116.81C63.8001 116.49 64.4301 116.33 65.1101 116.33C65.4201 116.33 65.6801 116.36 65.8901 116.43V120.35C65.3201 120.24 64.9301 120.19 64.7401 120.19C63.6301 120.19 62.6601 120.4 61.8201 120.81V129.89H57.3601Z"
              fill="#A4A09C"
            />
            <path
              d="M73.4801 130.15C68.7501 130.15 66.3901 127.87 66.3901 123.32V122.98C66.3901 120.92 66.9901 119.27 68.1801 118.05C69.3701 116.83 70.9801 116.23 72.9901 116.23C75.1801 116.23 76.7701 116.81 77.7401 117.97C78.7101 119.14 79.2001 120.87 79.2001 123.16V124.31H70.9101C71.0301 125.34 71.3901 126.05 71.9801 126.44C72.5701 126.83 73.4601 127.03 74.6401 127.03C75.9601 127.03 77.3001 126.76 78.6601 126.22V128.96C77.2801 129.75 75.5701 130.15 73.4801 130.15ZM72.9801 119.14C71.7301 119.14 71.0301 120.03 70.8701 121.8H74.9401C74.9401 120.84 74.7801 120.16 74.4701 119.76C74.1601 119.34 73.6601 119.14 72.9801 119.14Z"
              fill="#A4A09C"
            />
            <path
              d="M86.4399 129.91V112.38H98.4899V115.9H91.3499V119.87H96.9299V123.31H91.3499V129.91H86.4399Z"
              fill="#A4A09C"
            />
            <path
              d="M99.77 129.89V116.45H104.05V118.07H104.18C104.55 117.55 105.03 117.13 105.62 116.81C106.21 116.49 106.84 116.33 107.52 116.33C107.83 116.33 108.09 116.36 108.3 116.43V120.35C107.73 120.24 107.34 120.19 107.15 120.19C106.04 120.19 105.07 120.4 104.23 120.81V129.89H99.77Z"
              fill="#A4A09C"
            />
            <path
              d="M122.31 130.15C117.58 130.15 115.22 127.87 115.22 123.32V122.98C115.22 120.92 115.82 119.27 117.01 118.05C118.2 116.83 119.81 116.23 121.82 116.23C124.01 116.23 125.6 116.81 126.57 117.97C127.54 119.14 128.03 120.87 128.03 123.16V124.31H119.74C119.86 125.34 120.22 126.05 120.81 126.44C121.4 126.83 122.29 127.03 123.47 127.03C124.79 127.03 126.13 126.76 127.49 126.22V128.96C126.12 129.75 124.4 130.15 122.31 130.15ZM121.82 119.14C120.57 119.14 119.87 120.03 119.71 121.8H123.78C123.78 120.84 123.62 120.16 123.31 119.76C123 119.34 122.5 119.14 121.82 119.14Z"
              fill="#A4A09C"
            />
            <path
              d="M109.5 114.98V111.59H114.01V114.98H109.5ZM109.53 129.95V116.49H113.99V129.95H109.53Z"
              fill="#A4A09C"
            />
            <path
              d="M129.09 129.89V116.45H133.37V117.63H133.5C134.7 116.69 136.13 116.22 137.78 116.22C140.42 116.22 141.75 117.44 141.75 119.89V129.88H137.31V121.12C137.31 120.58 137.18 120.2 136.93 119.98C136.68 119.76 136.24 119.66 135.61 119.66C134.97 119.66 134.28 119.81 133.55 120.11V129.89H129.09Z"
              fill="#A4A09C"
            />
            <path
              d="M148.2 130.15C146.67 130.15 145.4 129.6 144.39 128.51C143.38 127.41 142.87 125.75 142.87 123.52V123.23C142.87 120.82 143.42 119.04 144.51 117.91C145.61 116.78 147.1 116.22 148.97 116.22C150.21 116.22 151.14 116.41 151.78 116.79V111.23H156.19V129.88H152.38L152.09 128.86H151.94C151.05 129.72 149.8 130.15 148.2 130.15ZM149.89 126.91C150.62 126.91 151.25 126.71 151.79 126.31V119.71C151.31 119.4 150.69 119.25 149.94 119.25C149.11 119.25 148.48 119.52 148.06 120.07C147.65 120.62 147.44 121.58 147.44 122.95V123.34C147.44 124.7 147.64 125.63 148.05 126.14C148.46 126.66 149.08 126.91 149.89 126.91Z"
              fill="#A4A09C"
            />
          </g>
          <defs>
            <clipPath id="clip0_178_1044">
              <rect
                width="155.42"
                height="130.15"
                fill="white"
                transform="translate(0.790039)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "more":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M-4.37114e-07 10.5C-1.96264e-07 16.01 4.49 20.5 10 20.5C15.51 20.5 20 16.01 20 10.5C20 4.99 15.51 0.499999 10 0.5C4.49 0.5 -6.77964e-07 4.99 -4.37114e-07 10.5ZM9.25999 6.14999L12.35 10.26C12.36 10.28 12.37 10.31 12.39 10.33C12.4 10.36 12.41 10.38 12.42 10.41C12.47 10.5 12.5 10.61 12.5 10.71C12.5 10.81 12.47 10.91 12.43 11C12.42 11.02 12.41 11.04 12.4 11.07C12.39 11.09 12.38 11.11 12.37 11.13L9.45 15.06C9.22 15.4 8.74999 15.49 8.40999 15.25C8.06999 15.02 7.97999 14.55 8.20999 14.21C8.43999 13.87 10.82 10.73 10.82 10.73L8.06 7.04999C7.81 6.71999 7.87999 6.25 8.20999 6C8.53999 5.75 9.00999 5.81999 9.25999 6.14999Z"
            fill="#EDE8E1"
          />
        </svg>
      );
    case "add":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#B5B3AF" />
          <g clipPath="url(#clip0_37_100)">
            <rect x="9.375" y="5" width="1.25" height="10" fill="white" />
            <rect
              x="5"
              y="10.625"
              width="1.25"
              height="10"
              transform="rotate(-90 5 10.625)"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_37_100">
              <rect
                width="10"
                height="10"
                fill="white"
                transform="translate(5 5)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "editDelete":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          cursor="pointer"
        >
          <path
            d="M4.81 10.19C3.26 10.19 2 11.45 2 13C2 14.55 3.26 15.81 4.81 15.81C6.35 15.81 7.60999 14.55 7.60999 13C7.60999 11.45 6.35 10.19 4.81 10.19Z"
            fill="#A4A19D"
          />
          <path
            d="M11.9999 15.81C13.5519 15.81 14.8099 14.5519 14.8099 13C14.8099 11.4481 13.5519 10.19 11.9999 10.19C10.448 10.19 9.18994 11.4481 9.18994 13C9.18994 14.5519 10.448 15.81 11.9999 15.81Z"
            fill="#A4A19D"
          />
          <path
            d="M19.19 10.19C17.65 10.19 16.39 11.45 16.39 13C16.39 14.55 17.65 15.81 19.19 15.81C20.74 15.81 22 14.55 22 13C22 11.45 20.74 10.19 19.19 10.19Z"
            fill="#A4A19D"
          />
        </svg>
      );
    default:
      break;
  }
};

export default Svg;

const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 37px;
`;
