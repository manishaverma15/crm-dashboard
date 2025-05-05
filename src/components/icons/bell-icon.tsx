import { useResolvedTheme } from "@/lib/hooks";
import React from "react"

export function BellIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  const { isDarkTheme } = useResolvedTheme();

  return isDarkTheme ? <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
    <g filter="url(#filter0_d_38_22359)">
      <rect x="2" y="2" width="38" height="38" rx="12" fill="#010D19" />
      <rect x="2.5" y="2.5" width="37" height="37" rx="11.5" stroke="white" stroke-opacity="0.13" />
      <path d="M28.1902 24.3324C28.1254 24.2543 28.0617 24.1762 27.9992 24.1008C27.1398 23.0613 26.6199 22.434 26.6199 19.4914C26.6199 17.968 26.2554 16.718 25.5371 15.7805C25.0074 15.0879 24.2914 14.5625 23.3476 14.1742C23.3355 14.1675 23.3246 14.1586 23.3156 14.148C22.9761 13.0113 22.0472 12.25 20.9996 12.25C19.9519 12.25 19.0234 13.0113 18.684 14.1469C18.6749 14.157 18.6642 14.1656 18.6523 14.1723C16.45 15.0789 15.3797 16.8184 15.3797 19.4902C15.3797 22.434 14.8605 23.0613 14.0004 24.0996C13.9379 24.175 13.8742 24.2516 13.8094 24.3313C13.6419 24.5333 13.5357 24.779 13.5035 25.0394C13.4713 25.2999 13.5144 25.5641 13.6277 25.8008C13.8687 26.3086 14.3824 26.6238 14.9687 26.6238H27.0347C27.6183 26.6238 28.1285 26.309 28.3703 25.8035C28.4841 25.5668 28.5276 25.3023 28.4956 25.0416C28.4637 24.7809 28.3577 24.5348 28.1902 24.3324Z" fill="white" fillOpacity="0.8" />
      <path d="M20.9996 29.75C21.5641 29.7495 22.1179 29.5963 22.6023 29.3066C23.0867 29.0168 23.4837 28.6014 23.7512 28.1043C23.7637 28.0805 23.77 28.0538 23.7692 28.0269C23.7685 27.9999 23.7607 27.9736 23.7468 27.9506C23.7329 27.9275 23.7133 27.9084 23.6898 27.8952C23.6663 27.8819 23.6398 27.875 23.6129 27.875H18.3871C18.3601 27.8749 18.3336 27.8818 18.31 27.895C18.2865 27.9082 18.2668 27.9273 18.2528 27.9504C18.2389 27.9735 18.2311 27.9998 18.2304 28.0268C18.2296 28.0537 18.2358 28.0804 18.2484 28.1043C18.5158 28.6013 18.9127 29.0167 19.3971 29.3065C19.8814 29.5962 20.4352 29.7495 20.9996 29.75Z" fill="white" fillOpacity="0.8" />
    </g>
    <defs>
      <filter id="filter0_d_38_22359" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_22359" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_22359" result="shape" />
      </filter>
    </defs>
  </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" className={className} viewBox="0 0 44 44" fill="none" {...props}>
    <g filter="url(#filter0_d_38_23569)">
      <rect x="2" y="2" width="38" height="38" rx="12" fill="white" />
      <rect x="2.5" y="2.5" width="37" height="37" rx="11.5" stroke="#0E253C" strokeOpacity="0.1" />
      <path d="M28.1902 24.3324C28.1254 24.2543 28.0617 24.1762 27.9992 24.1008C27.1398 23.0613 26.6199 22.434 26.6199 19.4914C26.6199 17.968 26.2554 16.718 25.5371 15.7805C25.0074 15.0879 24.2914 14.5625 23.3476 14.1742C23.3355 14.1675 23.3246 14.1586 23.3156 14.148C22.9761 13.0113 22.0472 12.25 20.9996 12.25C19.9519 12.25 19.0234 13.0113 18.684 14.1469C18.6749 14.157 18.6642 14.1656 18.6523 14.1723C16.45 15.0789 15.3797 16.8184 15.3797 19.4902C15.3797 22.434 14.8605 23.0613 14.0004 24.0996C13.9379 24.175 13.8742 24.2516 13.8094 24.3313C13.6419 24.5333 13.5357 24.779 13.5035 25.0394C13.4713 25.2999 13.5144 25.5641 13.6277 25.8008C13.8687 26.3086 14.3824 26.6238 14.9687 26.6238H27.0347C27.6183 26.6238 28.1285 26.309 28.3703 25.8035C28.4841 25.5668 28.5276 25.3023 28.4956 25.0416C28.4637 24.7809 28.3577 24.5348 28.1902 24.3324Z" fill="#0E253C" fillOpacity="0.85" />
      <path d="M20.9996 29.75C21.5641 29.7495 22.1179 29.5963 22.6023 29.3066C23.0867 29.0168 23.4837 28.6014 23.7512 28.1043C23.7637 28.0805 23.77 28.0538 23.7692 28.0269C23.7685 27.9999 23.7607 27.9736 23.7468 27.9506C23.7329 27.9275 23.7133 27.9084 23.6898 27.8952C23.6663 27.8819 23.6398 27.875 23.6129 27.875H18.3871C18.3601 27.8749 18.3336 27.8818 18.31 27.895C18.2865 27.9082 18.2668 27.9273 18.2528 27.9504C18.2389 27.9735 18.2311 27.9998 18.2304 28.0268C18.2296 28.0537 18.2358 28.0804 18.2484 28.1043C18.5158 28.6013 18.9127 29.0167 19.3971 29.3065C19.8814 29.5962 20.4352 29.7495 20.9996 29.75Z" fill="#0E253C" fillOpacity="0.85" />
    </g>
    <defs>
      <filter id="filter0_d_38_23569" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_23569" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_23569" result="shape" />
      </filter>
    </defs>
  </svg>;
}
