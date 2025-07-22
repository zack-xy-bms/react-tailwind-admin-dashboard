import type { ModalControls } from '@types'
import { useCallback, useState } from 'react'

export function useModal(initialState: boolean = false): ModalControls {
  const [isOpen, setIsOpen] = useState(initialState)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])
  const toggleModal = useCallback(() => setIsOpen(prev => !prev), [])

  return { isOpen, openModal, closeModal, toggleModal }
}
