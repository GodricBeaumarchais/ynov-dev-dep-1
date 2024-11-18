import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../page'
import '@testing-library/jest-dom'
import { toast } from 'sonner'

jest.mock('sonner', () => ({
    toast: {
        error: jest.fn(),
        success: jest.fn(),
    },
    Toaster: () => null
}))

describe('Home Integration Tests', () => {
    const user = userEvent.setup()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('devrait afficher des erreurs pour un formulaire invalide', async () => {
        render(<Home />)
        
        // Ouvrir le formulaire
        const loginButton = screen.getByRole('button', { name: /login/i })
        await user.click(loginButton)

        // Soumettre le formulaire vide
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        // Vérifier que le toast est appelé
        await waitFor(() => {
            expect(toast.error).toHaveBeenCalled()
        })
    })

    it('devrait valider correctement les champs du formulaire', async () => {
        render(<Home />);
    
        // Ouvrir le formulaire
        const loginButton = screen.getByRole('button', { name: /login/i });
        await user.click(loginButton);
    
        // Soumettre un formulaire vide
        const form = screen.getByRole('form');
        fireEvent.submit(form);
    
        // Vérifier les messages d'erreur
        await waitFor(() => {
            expect(screen.getByTestId('error-message-nom')).toBeInTheDocument();
            expect(screen.getByTestId('error-message-prenom')).toBeInTheDocument();
            expect(screen.getByTestId('error-message-email')).toBeInTheDocument();
        });
    });
    

    it('devrait soumettre le formulaire avec succès et le fermer', async () => {
        render(<Home />);
    
        // Ouvrir le formulaire
        const loginButton = screen.getByRole('button', { name: /login/i });
        await user.click(loginButton);
    
        // Remplir les champs du formulaire
        await user.type(screen.getByTestId('input-nom'), 'Dupont');
        await user.type(screen.getByTestId('input-prenom'), 'Jean');
        await user.type(screen.getByTestId('input-email'), 'jean.dupont@example.com');
        await user.type(screen.getByTestId('input-ville'), 'Paris');
        await user.type(screen.getByTestId('input-codePostal'), '75001');
        await user.type(screen.getByTestId('input-dateNaissance'), '1990-01-01');
    
        // Soumettre le formulaire
        const form = screen.getByRole('form');
        fireEvent.submit(form);
    
        // Vérifier que le toast de succès est appelé
        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith("Formulaire soumis avec succès.");
        });
    
        // Vérifier que le formulaire est fermé
        await waitFor(() => {
            expect(screen.queryByRole('form')).not.toBeInTheDocument();
        });
    });
    
})