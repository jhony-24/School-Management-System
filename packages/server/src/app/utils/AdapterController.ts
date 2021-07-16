import { Controller } from '@localtypes/Controller';

type PropClassType<T extends Controller> = new (...props: any[]) => T;

/**
 * @param controller get a class controller
 * @returns return a callback method to using in a rounter
 */
export function AdapterController(controller: PropClassType<Controller>) {
  return new controller().start;
}
