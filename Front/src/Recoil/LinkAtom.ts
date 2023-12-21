import { atom } from 'recoil';

// Link 상태관리
export const linkState = atom<string>({
    key: 'linkState',
    default: '',
});
