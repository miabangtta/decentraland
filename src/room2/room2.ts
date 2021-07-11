function formatTimeString(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return (`${mins.toLocaleString(
        undefined, { minimumIntegerDigits: 2 })
    }:${secs.toLocaleString(
        undefined, { minimumIntegerDigits: 2 })
    }`);
  }

export function CreateRoom2(): void {
    const door = new Entity();
    engine.addEntity(door);
    door.addComponent(new GLTFShape("models/room2/Puzzle02_Door.glb"));
    door.addComponent(new Transform({ position: new Vector3(24.1, 5.51634, 24.9) }));

    door.addComponent(new Animator());
    door.getComponent(Animator).addClip(new AnimationState("Door_Open", { looping: false }));
    door.getComponent(Animator).addClip(new AnimationState("Door_Close", { looping: false }));

    door.addComponent(new AudioSource(new AudioClip("sounds/door_squeak.mp3")));

    const button = new Entity();
    engine.addEntity(button);
    button.addComponent(new GLTFShape("models/room2/Square_Button.glb"));
    button.addComponent(new Transform({ position: new Vector3(26.3714, 6.89, 26.8936) }));
    
    button.addComponent(new Animator());
    button.getComponent(Animator).addClip(new AnimationState("Button_Action", { looping: false }));

    button.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")));

    const countdownText = new Entity();
    engine.addEntity(countdownText);

    countdownText.addComponent(
        new Transform({
        position: new Vector3(25.1272, 9.51119, 25.2116),
        rotation: Quaternion.Euler(20, 180, 0)
        })
    );

    countdownText.addComponent(new TextShape(formatTimeString(5)));
    countdownText.getComponent(TextShape).color = Color3.Red();
    countdownText.getComponent(TextShape).fontSize = 5;


    button.addComponent(
        new OnClick((): void => {
            button.getComponent(Animator).getClip("Button_Action").play();
            button.getComponent(AudioSource).playOnce();

            door.getComponent(Animator).getClip("Door_Open").play();
            door.getComponent(AudioSource).playOnce();
        })
    )
}