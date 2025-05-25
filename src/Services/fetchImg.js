export const fetch = (hotel) => {
  return new Promise((resolve, reject) => {
    // Your Unsplash Access Key
    const ACCESS_KEY = "2zsapZ7MUkjaKD9YmYMWFIyJATkf2m5Ntx_eWq4HdeY";

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open(
      "GET",
      `https://api.unsplash.com/search/photos?query=${hotel}&per_page=1`,
      true
    );

    // Set the authorization header
    xhr.setRequestHeader("Authorization", "Client-ID " + ACCESS_KEY);

    // Define the callback function that handles the response
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Parse the JSON response
        const response = JSON.parse(xhr.responseText);
        const images = response.results;

        // Loop through the results and log the image URLs
        images.forEach((image) => {
          //console.log(image.urls.small); // Display small size image URL
        });
        resolve(images);
      } else {
        // Handle error response
        console.error("Error fetching images:", xhr.status, xhr.statusText);
        reject(xhr.status+xhr.statusText);
      }
    };

    // Handle network errors
    xhr.onerror = function () {
      console.error("Network error");
    };

    // Send the request
    xhr.send();
  });
};
