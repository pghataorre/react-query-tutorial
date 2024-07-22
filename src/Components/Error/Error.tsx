import '../../App.css';
import { IErrorProps } from './types';

const Loader = ({comments}: IErrorProps) => (
  <div >
    <h2 className='error'>{comments}</h2>
  </div>
)

export default Loader
