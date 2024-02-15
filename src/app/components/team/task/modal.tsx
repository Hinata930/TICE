'use client'


interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

export default async function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <>
      <button onClick={onClose} aria-label='close' className='fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-neutral-900 z-30'>
      </button>
      <div className='fixed mx-auto inset-32 rounded-lg z-50 bg-[var(--color-base-gray)]'>
        {children} {/* TaskDetailsModalコンポーネントがここに入る */}
      </div>
    </>
    
  );
}