import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not get loaded');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not get deleted');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://xjsrlgjamddpckeeqlvp.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg

  let query = supabase.from('cabins');
  //1 create cabin
  // if id is not present, we are creating a new cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // if id is present, we are updating an existing cabin
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not get created');
  }

  //2 upload image
  if (hasImagePath) return data;

  const { storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Image could not get uploaded, cabin not created');
  }

  return data;
}
