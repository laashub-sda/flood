import {FC} from 'react';
import {FormattedMessage} from 'react-intl';

import {Form, FormRow} from '@client/ui';

import type {FloodSettings} from '@shared/types/FloodSettings';

import ModalFormSectionHeader from '../ModalFormSectionHeader';
import MountPointsList from './lists/MountPointsList';

interface DiskUsageTabProps {
  onSettingsChange: (changedSettings: Partial<FloodSettings>) => void;
}

const DiskUsageTab: FC<DiskUsageTabProps> = (props: DiskUsageTabProps) => (
  <Form>
    <ModalFormSectionHeader>
      <FormattedMessage id="settings.diskusage.mount.points" />
    </ModalFormSectionHeader>
    <FormRow>
      <MountPointsList onSettingsChange={props.onSettingsChange} />
    </FormRow>
  </Form>
);

export default DiskUsageTab;
