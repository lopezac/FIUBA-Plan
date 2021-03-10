import { theme } from "@chakra-ui/core";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Style.css";

const customIcons = {
  github: {
    path: (
      <path
        fill="currentColor"
        d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
      />
    ),
    viewBox: "0 0 16 16",
  },
  graph: {
    path: (
      <path
        fill="currentColor"
        d="M430,102.509c-30.327,0-55,24.673-55,55c0,9.724,2.547,18.859,6.993,26.794l-61.444,61.445
		c-7.934-4.446-17.07-6.993-26.794-6.993c-9.724,0-18.86,2.547-26.794,6.993l-27.707-27.707c4.446-7.934,6.993-17.07,6.993-26.794
		c0-30.327-24.673-55-55-55s-55,24.673-55,55c0,9.724,2.547,18.859,6.993,26.794l-61.445,61.444
		c-7.935-4.446-17.071-6.993-26.795-6.993c-30.327,0-55,24.673-55,55s24.673,55,55,55s55-24.673,55-55
		c0-9.724-2.547-18.859-6.993-26.793l61.445-61.444c7.934,4.446,17.07,6.993,26.794,6.993c9.724,0,18.859-2.547,26.794-6.993
		l27.707,27.707c-4.446,7.934-6.993,17.07-6.993,26.794c0,30.327,24.673,55,55,55s55-24.673,55-55c0-9.724-2.547-18.86-6.993-26.794
		l61.444-61.444c7.935,4.446,17.07,6.993,26.794,6.993c30.327,0,55-24.673,55-55S460.327,102.509,430,102.509z M55,352.491
		c-13.785,0-25-11.215-25-25s11.215-25,25-25s25,11.215,25,25S68.785,352.491,55,352.491z M191.247,216.247
		c-13.785,0-25-11.215-25-25s11.215-25,25-25s25,11.215,25,25S205.032,216.247,191.247,216.247z M293.755,318.754
		c-13.785,0-25-11.215-25-25s11.215-25,25-25s25,11.215,25,25S307.54,318.754,293.755,318.754z M430,182.509
		c-13.785,0-25-11.215-25-25s11.215-25,25-25s25,11.215,25,25S443.785,182.509,430,182.509z"
      />
    ),
    viewBox: "0 0 485 485",
  },
  cafecito: {
    path: (
      <path
        fill="currentColor"
        d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
      />
    ),
    viewBox: "0 0 512 512",
  },
};

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      ...theme.colors.purple,
      500: "#b794f4",
    },
    background: "#2d3436",
    tooltipBackground: "#424c4f",
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  fonts: {
    general: "Noto Sans JP, sans-serif",
  },
};
