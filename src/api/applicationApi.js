export const submitApplication = (data, onProgress) => {
  return new Promise((resolve, reject) => {
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;

      // send progress back
      if (onProgress) {
        onProgress(progress);
      }

      if (progress >= 100) {
        clearInterval(interval);

        // simulate success response
        resolve({
          success: true,
          message: "Application submitted successfully",
          data,
        });
      }
    }, 200);
  });
};