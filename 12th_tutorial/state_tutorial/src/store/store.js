// src/store/store.js
import { create } from "zustand";

const useStore = create((set) => ({
	// 초기상태 설정
  darkmode: false,
  //상태 바꾸는 함수도 한 곳에 다 넣어줍니다
  changeTheme: () => set((state) => ({ darkmode: !state.darkmode })),
}));

export default useStore;