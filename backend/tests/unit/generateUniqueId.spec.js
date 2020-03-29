const generateUniqueId = require('../../src/utils/GenerateUniqueId')

describe('Generate Unique Id', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);

    });
});