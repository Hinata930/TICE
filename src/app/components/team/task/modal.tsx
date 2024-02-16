'use client'


interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <>
      <button onClick={onClose} aria-label='close' className='fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-neutral-900 z-30'>
      </button>
      <div className='fixed inset-y-32 inset-x-8 md:inset-x-16 rounded-lg z-50 bg-[var(--color-base-gray)]'>
        <div className='h-full'>
          {children} {/* TaskDetailsModalコンポーネントがここに入る */}
        </div>
      </div>
    </>
    
  );
}