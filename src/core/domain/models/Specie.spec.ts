import { Specie, SpecieProps, UpdateProps } from './Specie';

describe('Specie', () => {
  it('Constructor', () => {
    const specieProps: SpecieProps = {
      mythology: 'Test Mythology',
      shortDescription: 'Mythology',
    };
    const specie: Specie = new Specie(specieProps);

    expect(specie.id).toBeDefined();
    expect(specie.createdAt).toBeDefined();
    expect(specie.mythology).toStrictEqual(specieProps.mythology);
    expect(specie.shortDescription).toStrictEqual(specieProps.shortDescription);
  });

  it('updateShortDescrption method', () => {
    const specieProps: SpecieProps = {
      mythology: 'Test Mythology',
      shortDescription: 'Mythology',
    };
    const specie: Specie = new Specie(specieProps);
    specie.updateShortDescription('updated');
    expect(specie.shortDescription).toStrictEqual('updated');
    expect(specie.updatedAt).toBeDefined();
  });

  it('updateMythology method', () => {
    const specieProps: SpecieProps = {
      mythology: 'Test Mythology',
      shortDescription: 'Mythology',
    };
    const specie: Specie = new Specie(specieProps);
    specie.updateMythology('updated');
    expect(specie.mythology).toStrictEqual('updated');
    expect(specie.updatedAt).toBeDefined();
  });

  it('updateAll method', () => {
    const specieProps: SpecieProps = {
      mythology: 'Test Mythology',
      shortDescription: 'Mythology',
    };
    const specie: Specie = new Specie(specieProps);

    const updateObj: UpdateProps = {
      mythology: 'New Mythology',
      shortDescription: 'New Short Description',
    };

    specie.updateAll(updateObj);
    expect(specie.mythology).toStrictEqual(updateObj.mythology);
    expect(specie.shortDescription).toStrictEqual(updateObj.shortDescription);
  });
});
