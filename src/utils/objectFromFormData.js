const objectFromFormData = async (request) => {
  const formData = await request.formData();
  return Object.fromEntries(formData);
};

export default objectFromFormData;
