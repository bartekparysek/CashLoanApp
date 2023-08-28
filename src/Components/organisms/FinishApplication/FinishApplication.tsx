import { MdCheckCircle } from 'react-icons/md';
import NavButton from '../../atoms/NavButton';

export default function Finish() {
  return (
    <section className="bg-white rounded min-h-[60vh] p-5 min-w-[calc(50vw-2rem)] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <MdCheckCircle className="text-[#27ae60] w-16 h-16" />
        <h3 className="text-black opacity-30 font-bold my-4">
          Your applicacation has been submited succesfully!
        </h3>
        <NavButton path="/" nextPage="Start again" />
      </div>
    </section>
  );
}
