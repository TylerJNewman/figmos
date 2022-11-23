import * as React from "react";

// const AlienIcon = (props: any) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={64} height={64} {...props}>
//     <path
//       // fill="#454b54"
//       className="fill-current text-th-primary-dark"
//       d="M89 52.3c0 13.8-11.2 25-25 25s-25-11.2-25-25h50z"
//     />
//     <path
//       //  fill="#fff"
//       className="fill-current text-th-primary-dark"
//       d="M64 37.3a50 15 0 1 0 0 30 50 15 0 1 0 0-30Z"
//     />
//     <path
//       // fill="#98bed8"
//       className="fill-current text-th-primary-dark"
//       d="M34.3 50.9c2.1 4.7 14.6 8.7 29.7 8.7 15.3 0 28-3 29.8-8.7-1.8-5.7-14.5-8.7-29.8-8.7-15.1 0-27.6 4-29.7 8.7"
//     />
//     <path
//       // fill="#454b54"
//       className="fill-current text-th-primary-dark"
//       d="M64 70.3c-26.3 0-53-6.2-53-18s26.7-18 53-18 53 6.2 53 18-26.7 18-53 18m0-30c-33 0-47 8.6-47 12 0 3.4 14 12 47 12s47-8.6 47-12c0-3.4-14-12-47-12"
//     />
//     <path
//       // fill="#d8e3eb"
//       className="fill-current text-th-primary-dark"
//       d="M34.32 50.944C36.445 55.727 48.898 59.7 64 59.7c15.104 0 27.56-2.898 29.681-8.468C91.5 56.717 78.999 59.6 64 59.6c-15.052 0-27.521-3.975-29.68-8.656M64 40.3c-12.355 0-22.048 1.206-29.339 2.893A30.245 30.245 0 0 0 34 49.5c0 .472.102.939.3 1.399C36.401 46.2 48.901 42.2 64 42.2c15.292 0 27.988 2.997 29.797 8.691A4.82 4.82 0 0 0 94 49.5c0-2.164-.228-4.275-.661-6.308C86.048 41.506 76.355 40.3 64 40.3m0-20.8c-11.999 0-22.326 7-27.129 17.151C45.139 35.093 54.595 34.3 64 34.3c9.405 0 18.86.793 27.128 2.351C86.326 26.5 75.999 19.5 64 19.5"
//     />
//     <path
//       // fill="#b9d0df"
//       className="fill-current text-th-primary-dark"
//       d="M64 42.2c-15.099 0-27.599 4-29.7 8.699l.02.045C36.479 55.625 48.948 59.6 64 59.6c14.999 0 27.5-2.884 29.681-8.368a4.56 4.56 0 0 0 .116-.341C91.988 45.197 79.292 42.2 64 42.2"
//     />
//     <path
//       // fill="#a0adb8"
//       className="fill-current text-th-primary-dark"
//       d="M64 34.3c-9.405 0-18.861.793-27.129 2.351a29.855 29.855 0 0 0-2.211 6.541C41.952 41.506 51.645 40.3 64 40.3s22.048 1.206 29.339 2.893a29.732 29.732 0 0 0-2.211-6.541C82.86 35.093 73.405 34.3 64 34.3"
//     />
//     <path
//       // fill="#454b54"
//       className="fill-current text-th-primary-dark"
//       d="M84.5 60.3c-1.3 0-2.5-.9-2.9-2.2-.5-1.6.4-3.3 2-3.7 4.5-1.3 7.3-3.2 7.3-4.9s1.3-3 3-3 3 1.3 3 3c0 3.3-2 7.9-11.6 10.7-.2 0-.5.1-.8.1z"
//     />
//     <path
//       // fill="#fff"
//       className="fill-current text-th-primary-dark"
//       d="M44.2 49.4h-.5c-1.6-.3-2.8-1.8-2.5-3.4C43 34.9 52.8 26.5 64 26.5c1.7 0 3 1.3 3 3s-1.3 3-3 3c-8.3 0-15.5 6.2-16.8 14.4-.2 1.5-1.5 2.5-3 2.5z"
//     />
//     <path
//       // fill="#454b54"
//       className="fill-current text-th-primary-dark"
//       d="M94 52.5c-1.7 0-3-1.3-3-3 0-14.9-12.1-27-27-27s-27 12.1-27 27c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-18.2 14.8-33 33-33s33 14.8 33 33c0 1.6-1.3 3-3 3zm-51.3 56.2c-.3 0-.5 0-.8-.1-1.6-.4-2.5-2.1-2.1-3.7l8.5-31.2c.4-1.6 2.1-2.5 3.7-2.1 1.6.4 2.5 2.1 2.1 3.7l-8.5 31.2c-.3 1.3-1.5 2.2-2.9 2.2zm42.6 0c-1.3 0-2.5-.9-2.9-2.2l-8.5-31.2c-.4-1.6.5-3.2 2.1-3.7 1.6-.4 3.2.5 3.7 2.1l8.5 31.2c.4 1.6-.5 3.2-2.1 3.7-.3 0-.6.1-.8.1zM64 91.7c-1.7 0-3-1.3-3-3V77.3c0-1.7 1.3-3 3-3s3 1.3 3 3v11.3c0 1.7-1.3 3.1-3 3.1z"
//     />
//   </svg>
// );

// export default AlienIcon;

const SvgComponent = (props: any) => (
  <svg viewBox="0 0 20 20" width={40} height={40} {...props}>
    <path
      className="fill-current text-th-primary-dark"
      d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z"
    />
  </svg>
);

export default SvgComponent;
