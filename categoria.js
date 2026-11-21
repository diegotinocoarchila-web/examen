export const CLAVE_CATEGORIAS = 'MIS_CATEGORIAS';

const categoriasPorDefecto = [
  { id: 'categoria_1', nombre: 'Trabajo' },
  { id: 'categoria_2', nombre: 'Personal' },
  { id: 'categoria_3', nombre: 'Estudio' }
];

export let categorias = JSON.parse(localStorage.getItem(CLAVE_CATEGORIAS)) || [...categoriasPorDefecto];

export function guardarCategorias(nombreCategoria, idExistente = null) {
  const limpio = (nombreCategoria || '').trim();
  if (!limpio) return null;

  if (idExistente) {
    const categoria = categorias.find(c => c.id === idExistente);
    if (categoria) {
      categoria.nombre = limpio;
    }
  } else {
    categorias.push({
      id: 'categoria_' + Date.now(),
      nombre: limpio
    });
  }

  localStorage.setItem(CLAVE_CATEGORIAS, JSON.stringify(categorias));
  actualizarSelectsCategorias();
  return categorias;
}

export function eliminarCategoria(id) {
  categorias = categorias.filter(c => c.id !== id);
  localStorage.setItem(CLAVE_CATEGORIAS, JSON.stringify(categorias));
  actualizarSelectsCategorias();
}

export function obtenerNombreCategoria(categoriaId) {
  if (!categoriaId) return '';
  const encontrada = categorias.find(c => c.id === categoriaId);
  return encontrada ? encontrada.nombre : '';
}

export function actualizarSelectsCategorias() {
  const selects = document.querySelectorAll('.select-categoria-form');
  selects.forEach(select => {
    const valorActual = select.value;
    select.innerHTML = '<option value="">Seleccione una categoría</option>';
    categorias.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.id;
      option.textContent = cat.nombre;
      select.appendChild(option);
    });
    if (valorActual) {
      select.value = valorActual;
    }
  });

  const filtroCat = document.getElementById('filtroCategoria');
  if (filtroCat) {
    const valorFiltro = filtroCat.value;
    filtroCat.innerHTML = '<option value="">Todas las categorías</option>';
    categorias.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.id;
      option.textContent = cat.nombre;
      filtroCat.appendChild(option);
    });
    if (valorFiltro) {
      filtroCat.value = valorFiltro;
    }
  }
}