let selectedCategory = 'All';
let searchTerm = '';

// Initialize the catalog
function initializeCatalog() {
  renderCategories();
  renderComponents();
  setupEventListeners();
}

// Render category buttons
function renderCategories() {
  const categoryContainer = document.getElementById('categoryButtons');
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = `px-4 py-2 rounded-md flex items-center space-x-2 ${
      category.id === selectedCategory
        ? 'bg-blue-500 text-white'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`;
    button.innerHTML = `
            <i data-lucide="${category.icon}" class="w-4 h-4"></i>
            <span>${category.id}</span>
        `;
    button.addEventListener('click', () => {
      selectedCategory = category.id;
      updateCategoryButtons();
      renderComponents();
    });
    categoryContainer.appendChild(button);
  });
  lucide.createIcons();
}

// Update category button styles
function updateCategoryButtons() {
  const buttons = document.querySelectorAll('#categoryButtons button');
  buttons.forEach(button => {
    const isSelected = button.textContent.trim() === selectedCategory;
    button.className = `px-4 py-2 rounded-md flex items-center space-x-2 ${
      isSelected
        ? 'bg-blue-500 text-white'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`;
  });
}

// Render component cards
// Render component cards
async function renderComponents() {
  const grid = document.getElementById('componentsGrid');
  grid.innerHTML = ''; // Clear previous components

  const filteredComponents = components.filter(component => {
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filteredComponents.forEach(component => {
    const template = document.getElementById('componentTemplate');
    const clone = template.content.cloneNode(true);

    // Fill in component details
    clone.querySelector('h3').textContent = component.name;
    clone.querySelector('.category-tag').textContent = component.category;
    clone.querySelector('.description').textContent = component.description;
    clone.querySelector('.preview-container').className = `preview-container h-16 rounded flex items-center justify-center ${component.previewClass}`;
    clone.querySelector('.preview-container').textContent = `${component.name} Preview`;

    // Add file links
    const filesContainer = clone.querySelector('.files-container');
    Object.entries(component.files).forEach(([type, path]) => {
      const link = document.createElement('a');
      link.href = path;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'file-link flex items-center justify-between px-3 py-2 bg-gray-50 rounded hover:bg-gray-100';
      link.innerHTML = `
                <span class="flex items-center">
                    <i data-lucide="file-code" class="w-4 h-4 mr-2"></i>
                    ${type.toUpperCase()}
                </span>
                <i data-lucide="external-link" class="w-4 h-4 text-gray-400"></i>
            `;
      filesContainer.appendChild(link);
      lucide.createIcons(); // Call lucide.createIcons after adding each icon
    });


    // Setup preview button
    const previewBtn = clone.querySelector('.preview-btn');
    previewBtn.addEventListener('click', () => {
      window.open(component.files.html, '_blank', 'width=800,height=600');
    });

    // Setup code toggle
    const codeToggle = clone.querySelector('.code-toggle');
    const codePreview = clone.querySelector('.code-preview');
    const preElement = codePreview.querySelector('pre'); // Get the <pre> element

    codeToggle.addEventListener('click', async () => {
      const isExpanded = codePreview.classList.contains('expanded');
      codePreview.classList.toggle('hidden');
      codePreview.classList.toggle('expanded');

      // Toggle icon using innerHTML (more robust than manipulating dataset directly)
      codeToggle.innerHTML = `
                <i data-lucide="${isExpanded ? 'chevron-right' : 'chevron-down'}" class="w-4 h-4 mr-1"></i>
                ${isExpanded ? 'View Code' : 'Hide Code'}
            `;
      lucide.createIcons();

      if (!codePreview.dataset.codeLoaded) {
        try {
          let allCode = '';
          for (const fileType in component.files) {
            if (component.files.hasOwnProperty(fileType)) {
              const filePath = component.files[fileType];
              const response = await fetch(filePath);
              if (!response.ok) {
                throw new Error(`Failed to fetch ${fileType} file: ${response.status} ${response.statusText}`);
              }
              const code = await response.text();
              allCode += `// ${fileType.toUpperCase()}:\n${code}\n\n`;
            }
          }
          preElement.textContent = allCode;
          codePreview.dataset.codeLoaded = 'true'; // Mark code as loaded
        } catch (error) {
          preElement.textContent = `Error loading code: ${error.message}`;
          console.error("Error fetching component files:", error);
        }
      }
    });

    grid.appendChild(clone);
  });

  lucide.createIcons();
}

// Setup event listeners
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderComponents();
  });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCatalog);