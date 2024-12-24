import React, {JSX, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export type Modal = {
  title: string;
  content: string;
  buttons: {
    primary: {
      text: string;
      action: () => void;
    };
    secondary?: {
      text: string;
      action: () => void;
    };
  };
  input?: {
    text: string;
    type: string;
    action: () => void;
  };
};

const defaultProps = {
  idKey: 0,
  modal: {} as Modal,
} as {
  idKey?: number;
  modal: Modal;
  children?: JSX.Element;
};

export const Comps_modal = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  let [isOpen, setIsOpen] = useState(true);
  let [searchTerm, setSearchTerm] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-dark-onBackground bg-opacity-20 px-4 py-2 text-sm font-medium text-light-primary dark:text-dark-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-light-surfaceVariant dark:bg-dark-surfaceVariant p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-light-primary dark:text-dark-primary"
                  >
                    {props.modal.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-m text-light-primary dark:text-dark-primary my-4">
                      {props.modal.content}
                    </p>
                  </div>

                  <div className="mt-4">
                    {props.modal.input && (
                      <input
                        className="appearance-none bg-transparent border-none outline-none focus:ring-0 w-full"
                        type={props.modal.input.type || "text"}
                        placeholder={props.modal.input.text || ""}
                        value={searchTerm}
                        onChange={handleInputChange}
                      />
                    )}
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-light-primary dark:bg-dark-primary px-6 py-3 text-base font-semibold text-light-onPrimary dark:text-dark-onPrimary shadow-sm hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 focus:outline-none focus:ring-2 focus:ring-light-onPrimary dark:focus:ring-dark-onPrimary "
                      onClick={closeModal}
                    >
                      {props.modal.buttons.primary.text}
                    </button>
                    {/* {props.modal.buttons.secondary.text !== "" && (
                      <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-light-primary dark:bg-dark-primary px-6 py-3 text-base font-semibold text-light-onPrimary dark:text-dark-onPrimary shadow-sm hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 focus:outline-none focus:ring-2 focus:ring-light-onPrimary dark:focus:ring-dark-onPrimary "
                      onClick={closeModal}
                    ></button>
                      )} */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
