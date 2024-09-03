

import {

  Transition,
  Dialog,
  DialogBackdrop,
  DialogPanel
} from "@headlessui/react";

import { IoClose } from "react-icons/io5";

const MainModal = ({ modalOpen, setModalOpen, children }) => {


  return (
    <Transition appear show={modalOpen} >
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        transition
        className=" z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/30 transition duration-500 ease-out data-[closed]:opacity-0 overflow-y-auto"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="min-w-lg max-w-5xl space-y-4 rounded-xl bg-white/5 backdrop-blur-full transition duration-300 ease-out data-[closed]:ease-in data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 ">
            {children}
          </DialogPanel>
        </div>
        <div className="absolute right-5 top-5">
          <button
            onClick={() => setModalOpen(false)}
            type="button"
            className="inline-flex cursor-pointer justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            <IoClose />
          </button>
        </div>



      </Dialog>
    </Transition>

  );
};

export default MainModal;
