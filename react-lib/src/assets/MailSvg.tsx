import React, { FC } from 'react';
import { StandardProps } from '@material-ui/core';

interface MailSvgProps {
  className?: string;
}

export const MailSvg: FC<MailSvgProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="169" height="191" viewBox="0 0 169 191" className={className}>
    <g fill="none" opacity=".301">
      <circle cx="150.051" cy="41.477" r="1" fill="#E6E8EC" />
      <path
        fill="#DCDFED"
        d="M90.086 1.936L7.121 56.055l54.143 98.183c.511.928 1.385 1.599 2.41 1.85l49.058 12.032c1.732.421 3.522-.43 4.296-2.045l24.333-50.83 26.67-35.844-63.287-75.28C101.1-.21 94.824-1.146 90.086 1.936z"
      />
      <path
        fill="#000"
        d="M168.929 80.299l-.235.319-15.621 20.997-.283.38-10.53 14.152-20.81 43.477-.584 1.215-2.938 6.134c-.775 1.617-2.568 2.47-4.302 2.044L64.569 156.98c-1.025-.25-1.9-.921-2.41-1.85l-4.718-8.539-.847-1.537-34.05-61.77-.293-.526L8.02 56.954l1.72-1.122 13.036-8.5.301-.198 27.452-17.907 1.732-1.129L90.98 2.84C95.718-.25 102 .686 105.645 5.02l28.87 34.352 1.269 1.531 20.954 24.924.114.137 10.536 12.529 1.326 1.579.216.226z"
        opacity=".1"
      />
      <path
        fill="#000"
        d="M156.344 65.72l-2.569 17.795-.774 5.37-.443 11.44-.035.893-2.304 59.773c-.045 1.123-.587 2.168-1.48 2.853-.892.685-2.044.94-3.144.697l-24.837-5.53-.267-.06-63.699-14.176-1.17-.26-35.017-7.799.803-53.742.025-1.795.242-16.267.268-17.954 27.574-17.84 1.74-1.125c25.576 2.615 59.59 7.646 82.634 11.233l1.274 1.526 21.032 24.83.147.137z"
        opacity=".1"
      />
      <path
        className="custom-fill"
        fill="#4DBFFA"
        d="M159.94 44.99l-3.032 20.845-2.78 19.089-.777 5.324-.444 11.37-2.345 60.294c-.045 1.116-.588 2.155-1.483 2.836-.896.681-2.05.935-3.153.692l-25.171-5.555-63.867-14.09-36.283-8.008.83-55.197.243-16.168.284-18.911.291-19.452c6-.281 15.873.354 27.66 1.525 26.392 2.619 62.369 7.915 85.89 11.563 14.404 2.233 24.137 3.843 24.137 3.843z"
      />
      <path
        fill="#000"
        d="M166.709 78.338l-13.427 6.559-68.524 33.472-63.15-51.983L8.842 55.86l-1.721 1.114L21.37 82.568l-.826 55.292 36.071 8.024 4.714 8.469c.511.921 1.387 1.587 2.414 1.835l49.116 11.933c1.734.417 3.524-.428 4.298-2.027l2.941-6.084 25.024 5.565c1.096.242 2.244-.012 3.134-.694.89-.682 1.43-1.723 1.475-2.84l2.331-60.399 15.924-21.197.044-.534-1.321-1.573z"
        opacity=".1"
      />
      <path
        fill="#DCDFED"
        d="M6.513 54.961L.834 151.623c-.108 1.848 1.148 3.501 2.965 3.903l150.798 33.29c1.07.232 2.189-.006 3.07-.653.88-.647 1.436-1.64 1.526-2.726l8.837-107.305-83.676 40.798L6.513 54.96z"
      />
      <path
        fill="#000"
        d="M1.141 154.288l78.38-48.156c2.397-1.447 5.491-.965 7.329 1.142l70.153 81.478c.255.292.379.083 0 0L1.14 154.288c-.446-.098-.388.232 0 0z"
        opacity=".1"
      />
      <path
        fill="#E3E5F1"
        d="M2.134 155.317l77.61-46.45c2.533-1.516 5.8-1.007 7.74 1.206l69.555 79.253c.236.27.27.66.086.968-.184.307-.547.463-.9.387L2.386 156.836c-.335-.072-.591-.34-.647-.675-.056-.335.101-.67.396-.844z"
      />
    </g>
  </svg>
);
