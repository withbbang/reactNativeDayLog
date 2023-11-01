import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

/**
 * 전역 상태 관리를 위한 첫번째 방법: context
 * @return {Object} LogContext.Provider, LogContext.Consumer 컴포넌트 반환
 * Provider는 Context안에 있는 값을 사용할 컴포넌트들을 감싸주는 용도로 사용
 * 여기서는 App 컴포넌트에서 RockStack컴포넌트를 감싸기로 함
 */
const LogContext = createContext();

/**
 * 유지보수성을 높이기 위해 Provider 전용 컴포넌트를 따로 만듦
 * 안그러면 App 컴포넌트에서 value 값을 계속 추가해야함
 * @param {any} param Provider 하위에 들어가는 컴포넌트들
 * @returns {React.JSX.Element}
 */
export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
