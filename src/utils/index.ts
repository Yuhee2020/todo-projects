import { saveAs } from 'file-saver';
import {StateType} from "../hooks";

export function loadState() {
  const data = sessionStorage.getItem('myAppData')

  return data ? JSON.parse(data) : undefined
}


export const saveData = (data:StateType) => {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'application/json' });
  saveAs(blob, 'project.json');
};
