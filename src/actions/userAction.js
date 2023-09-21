export const SET_ACTIVE_FOLDER_KET='SET_ACTIVE_FOLDER_KET';
export const SET_FIRST_SECTION_LOAD_PROGRESS='SET_FIRST_SECTION_LOAD_PROGRESS';
export function setFirstSectionLoadProgress(progress){
  return {
    type:SET_FIRST_SECTION_LOAD_PROGRESS,
    payload:progress
  };
}