import { gqlAllAddons } from '@/libs/gql/Addon';
import { gqlSetting } from '../Complex';

export const gqlAddonContent = `
data{
  id
  attributes{
    Name
    Setting{${gqlSetting}}
    Desktop{${gqlAllAddons}}
    Mobile{${gqlAllAddons}}
    Tablet{${gqlAllAddons}}
  }
}`;

export const gqlPageRow = `
data{
  id
  attributes{
    AddonContents{${gqlAddonContent}}
    Setting{${gqlSetting}}
  }
}`;