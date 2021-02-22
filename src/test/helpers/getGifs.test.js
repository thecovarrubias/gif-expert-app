import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs Fetch', () => {

    test('Debe de retornar 10 elementos', async () => {

        const gifs = await getGifs('funny');
        expect(gifs.length).toBe(10);

    });

    test('Debe de retornar 0 elementos si es vacío', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });

});