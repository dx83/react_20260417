// 모든 페이지에서 공유하기 위한 변수 설정
const initialState = {
    logged: 0,
    token: ''
}

const LoggedReducer = (state = initialState, action) => {
    if (action.type === 'login') {          // Login2.js에서 호출 dispatch({type:'login', token:'받은 토큰'})
        // 웹브라우저의 F12 => Application => Storage => Session storage에 보관
        sessionStorage.setItem("token", action.token);

        return { ...state, logged: 1, token: action.token };
    }
    else if (action.type === 'logout') {    // Logout.js에서 호출 dispatch({type:'logout'})
        // 로그아웃하면 로그인 정보 삭제
        sessionStorage.removeItem("token");
        return { ...state, logged: 0, token: '' };
    }
    else {                                  // Login2.js와 logout.js가 아닌 모든 페이지에서 호출
        // F5를 눌러도 로그인 유지
        const token = sessionStorage.getItem("token");
        if (token !== null) {
            state.logged = 1;
            state.token = token;
        }

        return state;
    }
}

export default LoggedReducer;