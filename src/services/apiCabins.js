import supabase from './supabase';

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

export async function createCabin(newCabin) {
  const { data, error } = await supabase.from('cabins').insert([newCabin]);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not get created');
  }

  return data;
}

export async function updateCabin(id, updatedCabin) {
  const { data, error } = await supabase.from('cabins').update(updatedCabin).eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not get updated');
  }

  return data;
}
