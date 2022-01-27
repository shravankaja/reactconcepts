import Fragements from './concepts/fragments/fragments';
import TabelFragements from './concepts/fragments/tabel';
import ParentComp from './concepts/pureComponents/parentPureComp';
import RefComp from './concepts/refs/refComp';
import ParentControlComp from './concepts/refs/parentControlClassRef';
import ParentForwardRef from './concepts/refs/frParent';
import UseRefOne from './concepts/refs/useRefOne';
import UseRefStoreValue from './concepts/refs/useRefToStoreValue';
import UseImparativeParent from './concepts/useImparativeHandle/useImparativeHandle';
import UseLayoutExample from './concepts/useLayoutEffect/useLayoutComp';
import PortalsComp from './concepts/portals/portalsComp';
import ErrorBoundaryComp from './concepts/errorboundary/errorBoundaryComp';
import ErrorTestOne from './concepts/errorboundary/errorTest';
import ClickCount from '../src/concepts/HOC/cliclCountComp'
import UseEffectComp from './concepts/useEffect/useEffectComp';

function App() {    
  return (
    <div>
      <UseEffectComp />
   </div>
  );
}

export default App;
