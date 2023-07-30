
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Controls from "../../components/MusicPlayer/Controls";

  export const spotifyApi = createApi({
    reducerPath: "spotifyApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam-api7.p.rapidapi.com",

      prepareHeaders: (headers) => {
        headers.set(
          "X-RapidAPI-Key",
          "6313b13c47msh48eaae59138addcp172ac8jsn437f89eb10b8"
        );
        headers.set("X-RapidAPI-Host", "shazam-api7.p.rapidapi.com");
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({
        query: () => "/charts/get-top-songs-in-world?limit=50",
      }),
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = spotifyApi;

  // export const spotifyApi = createApi({
  //   reducerPath: "spotifyApi",
  //   baseQuery: fetchBaseQuery({
  //     baseUrl: "https://shazam.p.rapidapi.com",

  //     prepareHeaders: (headers) => {
  //       headers.set(
  //         "X-RapidAPI-Key",
  //         "6313b13c47msh48eaae59138addcp172ac8jsn437f89eb10b8"
  //       );
  //       headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
  //       return headers;
  //     },
  //   }),
  //   endpoints: (builder) => ({
  //     getTopCharts: builder.query({
  //       query: () => "/artists/get-top-songs?id=567072",
  //     }),
  //   }),
  // });

  // export const {
  //   useGetTopChartsQuery,
  // } = spotifyApi;

