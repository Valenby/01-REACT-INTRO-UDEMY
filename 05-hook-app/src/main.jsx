import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWhitCustomHoosk } from './01-useState/CounterWhitCustomHoosk';
// import { SimpleForm } from './UseEffect/SimpleForm';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CollbackHook } from './06-memos/CollbackHook';
// import { Padre } from './07-tarea-memo/Padre';

// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';




import './index.css'

 ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
     <TodoApp/>
 </React.StrictMode>
)
