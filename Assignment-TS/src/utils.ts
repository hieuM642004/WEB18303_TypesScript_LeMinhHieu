import { KaboomCtx } from 'kaboom';
import { scale } from './constants';

export async function makeMap(k: KaboomCtx, name: string) {
    const mapData = await (await fetch(`./${name}.json`)).json();
    k.add([]);
    const map = k.make([k.sprite(name), k.scale(scale), k.pos(0)]);

    const spawnPoints: { [key: string]: { x: number; y: number }[] } = {};
    const user = localStorage.getItem('playerName');
    for (const layer of mapData.layers) {
        if (layer.name === 'colliders') {
          k.loadSprite("player-icon", "path/to/player-icon.png");
            map.add([
                k.text(`Người chơi:${user} `, { size: 8 ,font: "sans-serif"}),
                k.pos(-72, 100),
                k.color(127, 200, 255),
                
            ]);
            for (const collider of layer.objects) {
                map.add([
                    k.area({
                        shape: new k.Rect(
                            k.vec2(0),
                            collider.width,
                            collider.height,
                        ),
                        collisionIgnore: ['platform', 'exit'],
                    }),
                    collider.name !== 'exit'
                        ? k.body({ isStatic: true })
                        : null,
                    k.pos(collider.x, collider.y),
                    collider.name !== 'exit' ? 'platform' : 'exit',
                ]);
            }
            continue;
        }
        if (layer.name === 'spawnpoints') {
            for (const spawnPoint of layer.objects) {
                if (spawnPoints[spawnPoint.name]) {
                    spawnPoints[spawnPoint.name].push({
                        x: spawnPoint.x,
                        y: spawnPoint.y,
                    });
                    continue;
                }
                spawnPoints[spawnPoint.name] = [
                    { x: spawnPoint.x, y: spawnPoint.y },
                ];
            }
        }
    }

    return { map, spawnPoints };
}
