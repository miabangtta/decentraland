import {CreateRoom1} from '../models/room1/room1';

const baseScene = new Entity();
engine.addEntity(baseScene);
baseScene.addComponent(new GLTFShape("models/scene.glb"));

CreateRoom1();