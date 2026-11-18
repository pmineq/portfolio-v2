import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { disposeObject } from './disposeObject';

export { disposeObject } from './disposeObject';

/** A late download must not attach a model to an already unmounted scene. */
export class SceneModelLoader extends GLTFLoader {
  private disposed = false;

  load(
    url: string,
    onLoad: (model: GLTF) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (error: unknown) => void,
  ): void {
    super.load(url, (model) => {
      if (this.disposed) {
        model.scenes.forEach(disposeObject);
        return;
      }
      onLoad(model);
    }, onProgress, onError);
  }

  dispose(): void {
    this.disposed = true;
  }
}
