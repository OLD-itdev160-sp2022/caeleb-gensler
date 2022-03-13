
  var data = [
    {
      name: 'Path Intellisense',
      decription: 'The Path Intellisense extension helps to autocomplete filenames.',
      author: 'Christian Kohler',
      url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
      downloads: 6578621,
      stars: 102,
      selector: 'e1'
    },
    {
      name: 'Git Lens',
      decription: 'The GitLens extension enables you to visualize code authorship within VS Code.',
      author: 'GitKraken',
      url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
      downloads: 13574633,
      stars: 543,
      selector: 'e2'
    }
  ]

  function Extension(data) {
    this.name = data.name;
    this.decription = data.decription;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
      console.log(this.downloads, this);
      return this.downloads.toString();
    };

    this.getFormattedStars = function() {
      return this.stars.toString();
    };
  }

  var getDate = function() {
    var date = new Date();
    return date.toDateString();
  };

  var createExtensionInfo = function(extension) {
    var selector = extension.selector,
      nameEl = document.getElementById(selector + '-name'),
      descEl = document.getElementById(selector + '-desc'),
      authEl = document.getElementById(selector + '-author'),
      downloadEl = document.getElementById(selector + '-downloads'),
      starsEl = document.getElementById(selector + '-stars');

      nameEl.textContent = extension.name;
      descEl.textContent = extension.decription;
      authEl.textContent = 'Author: ' + extension.author;
      downloadEl.textContent = 'Downloads: ' + extension.getFormattedDownloads();
      starsEl.textContent = 'Ratings: ' + extension.getFormattedStars();
  }

  dateEl = document.getElementById('date');
  dateEl.textContent = getDate();

  var pathIntel = new Extension(data[0]);
  createExtensionInfo(pathIntel);

  var gitLens = new Extension(data[1]);
  createExtensionInfo(gitLens);
