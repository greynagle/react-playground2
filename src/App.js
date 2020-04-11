import React from 'react';
import "./App.css"


// Used for tooltip demo

// import Tooltip from './composition/Tooltip'
// import Split from './composition/Split'

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//     ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

// export default function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis={2}>
//       This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split className='right'>
//         This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
//   );
// }

// used with date function
// import TheDate from './state/TheDate'
// export default function App() {
//   return <TheDate />
// }


// Used with Counter subunit
// import Counter from './state/Counter'
// export default function App() {
//   return <Counter />
// }

// Used with HelloWorld button subunit
// import HelloWorld from './state-drills/HelloWorld'
// export default function App() {
//   return <HelloWorld />
// }

// used with Bomb subunit
// import Bomb from './state-drills/Bomb'
// export default function App() {
//   return <Bomb />
// }

import RouletteGun from './state-drills/RouletteGun'
export default function App() {
  return <RouletteGun bulletInChamber={3} />
}