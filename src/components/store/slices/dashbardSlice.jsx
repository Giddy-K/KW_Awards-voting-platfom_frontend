import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: {
    totalUsers: 1250,
    pendingApprovals: 15,
    totalVotes: 3750,
    activeNominees: 48,
  },
  pendingArtists: [],
  recentVotes: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.stats = action.payload;
    },
    setPendingArtists: (state, action) => {
      state.pendingArtists = action.payload;
    },
    setRecentVotes: (state, action) => {
      state.recentVotes = action.payload;
    },
  },
});

export const { setStats, setPendingArtists, setRecentVotes } = dashboardSlice.actions;
export default dashboardSlice.reducer;