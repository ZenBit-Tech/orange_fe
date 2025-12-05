import React from 'react';

import { Modal } from '@mui/material';

import { t } from 'i18next';
import { X } from 'lucide-react';

import {
  ButtonContainer,
  CancelButton,
  CloseButton,
  DeleteButton,
  DescriptionText,
  ModalContent,
  ModalHeader,
  TitleText,
} from './styles';

interface DeleteMarkerModalProps {
  open: boolean;
  markerName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteMarkerModal: React.FC<DeleteMarkerModalProps> = ({
  open,
  markerName,
  onClose,
  onConfirm,
}) => {
  const handleDelete = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-marker-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <X />
          </CloseButton>
        </ModalHeader>
        <TitleText>
          {t('review.delete-marker-title-firstPart')} {markerName}{' '}
          {t('review.delete-marker-title-secondPart')}
        </TitleText>

        <DescriptionText>{t('review.delete-marker-description')}</DescriptionText>

        <ButtonContainer>
          <CancelButton onClick={onClose}>{t('review.delete-marker-cancel')}</CancelButton>
          <DeleteButton onClick={handleDelete}>{t('review.delete-marker-confirm')}</DeleteButton>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
};
