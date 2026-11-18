export let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
categorias = [
  { id: 'categoria_1', nombre: 'Trabajo' },
  { id: 'categoria_2', nombre: 'Personal' },
  { id: 'categoria_3', nombre: 'Estuudio' },
];

export function guardarCategorias(nombredelaCategoria, idExistente = null){
    if (!nombredelacCategoria.trim()) return;
}
    if (idExistente) {
        const categoria = categorias.find(c => c.id === idExistente);
        if (categoria) {
            categoria.nombre = nombredelacCategoria.trim();
        };
        categorias.push(nuevaCategoria);
    }

    export function eliminarCategoria(id) {
        categorias = categorias.filter(c => c.id !== id);
        localStorage.setItem(MIS_ETIQUETAS, JSON.stringify(categorias));
        actualizarSelectcategorias();
    }
    
    export function actualizarSelectacategorias() {
        const selectFormulario = documento.getElementobyid('selectCategoria');
        if (!selectFormulario) return;

        selectFormulario.innerHTML = '<option value="">Seleccione una categoría</option>';

        categorias.forEach(categoria => {
            selectFormulario.innerHTML += `<option value="${categoria.id}">${categoria.nombre}</option>`;
        });
    }

documento.addEventlidtener('DOMContentLoaded', () => {
    actualizarSelectsCategorias();
});

import { categorias, guardarCategorias, eliminarCategoria, actualizarSelectsCategorias } from './categoria.js';

const categoriaId = documentos.gentElementoByid('selectCategorias').velve

tareas.push({
    id: 'tarea' + Date.now(),
    titulo: titulo,
    descripcion: descripcion,
    fecha: new Date().toLocaleDateString(),
    completado: false,
    esImportante: false,
    categoriaId: categoriaId // <-- Vinculacion de la lista
});