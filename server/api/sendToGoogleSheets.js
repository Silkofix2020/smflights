export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // Обработка отправки данных в Google Sheets
  // Например, с помощью axios
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxPZb8IW0SYulTCJI98MSZkrFz7WctgleV1EEzcfKKNq2f3GfYG70Ksx11LkzCuJVWs/exec",
      body
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
