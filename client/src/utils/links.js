
import { BsFillBarChartFill } from 'react-icons/bs';
import { MdQueryStats } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { BsPersonCheckFill } from 'react-icons/bs';

const links = [
  { id: 1, text: 'stats', path: '/', icon: <BsFillBarChartFill /> },
  { id: 2, text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add job', path: 'add-job', icon: <AiOutlineForm /> },
  { id: 4, text: 'profile', path: 'profile', icon: <BsPersonCheckFill /> },
]

export default links